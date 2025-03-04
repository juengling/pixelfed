<?php

namespace App\Jobs\DeletePipeline;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Bookmark;
use App\DirectMessage;
use App\Like;
use App\Media;
use App\MediaTag;
use App\Mention;
use App\Report;
use App\Status;
use App\StatusHashtag;
use App\StatusView;
use App\Notification;
use App\Services\NetworkTimelineService;
use App\Services\StatusService;
use App\Jobs\ProfilePipeline\DecrementPostCount;
use App\Jobs\MediaPipeline\MediaDeletePipeline;

class DeleteRemoteStatusPipeline implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $status;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Status $status)
    {
        $this->status = $status->withoutRelations();
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $status = $this->status;

        NetworkTimelineService::del($status->id);
        StatusService::del($status->id, true);
        DecrementPostCount::dispatchNow($status->profile_id);
        Bookmark::whereStatusId($status->id)->delete();
        Notification::whereItemType('App\Status')
            ->whereItemId($status->id)
            ->forceDelete();
        DirectMessage::whereStatusId($status->id)->delete();
        Like::whereStatusId($status->id)->forceDelete();
        MediaTag::whereStatusId($status->id)->delete();
        Media::whereStatusId($status->id)
            ->get()
            ->each(function($media) {
                MediaDeletePipeline::dispatchNow($media);
            });
        Mention::whereStatusId($status->id)->forceDelete();
        Report::whereObjectType('App\Status')->whereObjectId($status->id)->delete();
        StatusHashtag::whereStatusId($status->id)->delete();
        StatusView::whereStatusId($status->id)->delete();
        Status::whereReblogOfId($status->id)->forceDelete();
        $status->delete();
    }
}
