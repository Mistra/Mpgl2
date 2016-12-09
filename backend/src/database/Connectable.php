<?php

namespace database;
use \PDO;

class Connectable {
    function __construct($pdo) {
        $this->pdo = $pdo;
    }

    function connect() {
        return $this->pdo;
    }
}
