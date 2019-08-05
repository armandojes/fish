<?php

class User extends Model {

  private $password;
  private $email;

  //seters
  public function set_password ($password){
    $this->password = $this->prepare($password);
  }
  public function set_email ($email){
    $this->email = $this->prepare($email);
  }


  public function save (){
    $id = $this->Connect->create("INSERT INTO data (password, email) VALUES ('$this->password', '$this->email')");
  }

}
