<?php

namespace App\Services;

use Illuminate\Support\Facades\Cache;
use App\Status;
use Illuminate\Support\Str;

class StatusLabelService
{
	const CACHE_KEY = 'pf:services:status_label:_v0:';

	public static function get(Status $status)
	{
		if(config('instance.label.covid') == false || !$status) {
			return [
				'covid' => false
			];
		}
		
		return Cache::remember(self::CACHE_KEY . $status->id, now()->addDays(7), function() use($status) {
			return [
				'covid' => Str::of(strtolower($status->caption))->contains(['covid','corona', 'coronavirus', 'vaccine', 'vaxx', 'vaccination'])
			];
		});
	}

}
