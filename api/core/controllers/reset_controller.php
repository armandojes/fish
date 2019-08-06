<?php


class reset_controller extends controller {

  public function execute (){

    $User = new User();

    $state = $User->reset_state();

    $this->response([
      'status' => $state,
    ]);
  }
}
