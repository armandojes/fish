<?php
require 'config.php';

//system
require 'system/router.php';
require 'system/controller.php';
require 'system/connect.php';
require 'system/model.php';

//models
require 'models/user.php';

//controller
require 'controllers/test_controller.php';
require 'controllers/save_controller.php';
require 'controllers/state_controller.php';

//routes
require 'routes.php';
