<?php
$Router = new Router();


$Router->get('/test', 'test_controller');


$Router->dispatch();
