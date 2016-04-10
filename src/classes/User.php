<?php
class User {
    $private $_db,
             $_data,
             $_sessionname,
             $_isLoggedIn;

    /**
     * User Class Constructor
     *
     *
     */

    public function __construct($user = null) {
        $this->_db = DB::getInstance();

        $this->_sessionname = Config::get('session/session_name');

        if(!$user) {
            if()
        }
    }
}
?>
