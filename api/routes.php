<?php
$Router = new Router();


$Router->get('/test', 'test_controller');
$Router->post('/save', 'save_controller');


$Router->dispatch();
