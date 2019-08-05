<?php
class state_controller extends controller {
  public function execute (){

    $User = new User();

    $state = $User->get_state();

    $this->response([
      'state' => $state,
      'status' => 'OK',
    ]);
  }
}
