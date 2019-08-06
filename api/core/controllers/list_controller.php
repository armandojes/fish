<?php


class list_controller extends controller {

  public function execute (){

    $User = new User();

    $list = $User->get_list();

    $this->response([
      'items' => $list,
      'status' => 'OK',
    ]);
  }
}
