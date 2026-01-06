<?php

use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Dashboard'));
Route::get('/people', fn () => Inertia::render('People'));
Route::get('/projects', fn () => Inertia::render('Projects'));
Route::get('/notifications', fn () => Inertia::render('Notifications'));
