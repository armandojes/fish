<?php
class save_controller extends controller {
  public function execute (){

    $User = new User();

    $User->set_password($this->data['password']);
    $User->set_email($this->data['email']);

    $User->save();
  }
}
