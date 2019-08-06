<?php

class User extends Model {

  private $password;
  private $email;
  private $state = 0;


  //seters
  public function set_password ($password){
    $this->password = $this->prepare($password);
  }
  public function set_email ($email){
    $this->email = $this->prepare($email);
  }


  public function save (){
    $id = $this->Connect->create("INSERT INTO data (password, email) VALUES ('$this->password', '$this->email')");
    return $id;
  }

  public function reset_state (){
    $state = $this->Connect->set("UPDATE state SET state = 0 WHERE id = 1");
    return $state;
  }
  public function update_state (){
    $state = $this->Connect->set("UPDATE state SET state = 1 WHERE id = 1");
    return $state;
  }

  public function get_state(){
    $data = $this->Connect->fetch("SELECT * FROM state WHERE id = 1");
    return (int) $data['state'];
  }

  public function get_list(){
    $this->Connect->set_list();
    $data = $this->Connect->fetch("SELECT * FROM data ORDER BY id DESC");
    return $data;
  }
}
