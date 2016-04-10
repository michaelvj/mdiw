<?php
class Config {

    /*
    Used to get settings from the global variable config in init.php
     */
    public static function get($path = null){
            if($path){
                $config = $GLOBALS['config'];
                $path = explode('/', $path);


                foreach($path as $bit){
                    if(isset($config[$bit]))
                    {
                        $config = $config[$bit];
                    }
                }

                return $config;
            }
    }
}
