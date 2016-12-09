<?php
namespace database;
use \PDO;

class ErasmusDao extends Connectable implements Dao {

    function select() {
        $erasmusList = array();
        $sql = "select * from erasmus";
        try {
            $conn = $this->connect();
            $statement = $conn->prepare($sql);
            $statement->execute();

            $erasmusList = $statement->fetchAll(PDO::FETCH_ASSOC);
        }
        finally {
            $conn=null;
        }
        return $erasmusList;
    }

    function selectOne($id) {
        $erasmus = null;
        $sql = "select * from erasmus where id = :id";
        try {
            $conn = $this->connect();
            $statement = $conn->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_STR);
            $statement->execute();

            $erasmus = $statement->fetch(PDO::FETCH_ASSOC);
        }
        finally {
            $conn=null;
        }
        return $erasmus;
    }

    function create($erasmus) {
        $id = null;
        $sql = "insert into erasmus " .
        "(name, surname, email, birthday, nationality, mobile, esncard, faculty, uni_id, registration_date, city) " .
        "values" .
        "(:name, :surname, :email, :birthday, :nationality, :mobile, :esncard, :faculty, :uni_id, :registration_date, :city)";
        try {
            $conn = $this->connect();
            $statement = $conn->prepare($sql);
            $statement->bindParam(':email', $erasmus['email'], PDO::PARAM_STR);
            $statement->bindParam(':name', $erasmus['name'], PDO::PARAM_STR);
            $statement->bindParam(':surname', $erasmus['surname'], PDO::PARAM_STR);
            $statement->bindParam(':nationality', $erasmus['nationality'], PDO::PARAM_STR);
            $statement->bindParam(':birthday', $erasmus['birthday'], PDO::PARAM_STR);
            $statement->bindParam(':city', $erasmus['city'], PDO::PARAM_STR);
            $statement->bindParam(':faculty', $erasmus['faculty'], PDO::PARAM_STR);
            $statement->bindParam(':mobile', $erasmus['mobile'], PDO::PARAM_STR);
            $statement->bindParam(':esncard', $erasmus['esncard'], PDO::PARAM_STR);
            $statement->bindParam(':uni_id', $erasmus['uni_id'], PDO::PARAM_STR);
            $statement->bindParam(':registration_date', $erasmus['registration_date'], PDO::PARAM_STR);
            $statement->execute();
            $id = $conn->lastInsertId('erasmus_id_seq');
        } finally {
            $conn=null;
        }
        return $id;
    }

    function delete($id) {
        $sql = "delete from erasmus where " .
        "id = :id";
        try {
            $conn = $this->connect();
            $statement = $conn->prepare($sql);
            $statement->bindParam(':id', $id, PDO::PARAM_STR);
            $statement->execute();
        } finally {
            $conn=null;
        }
    }

    function update($erasmus) {
        $sql = "update erasmus set " .
        "name = :name, surname = :surname, " .
        "email = :email, birthday = :birthday, " .
        "nationality = :nationality, mobile = :mobile, esncard = :esncard, " .
        "faculty = :faculty, uni_id = :uni_id, " .
        "registration_date = :registration_date, city = :city " .
        "where id = :id";
        try {
            $conn = $this->connect();
            $statement = $conn->prepare($sql);
            $statement->bindParam(':id', $erasmus['id'], PDO::PARAM_STR);
            $statement->bindParam(':email', $erasmus['email'], PDO::PARAM_STR);
            $statement->bindParam(':name', $erasmus['name'], PDO::PARAM_STR);
            $statement->bindParam(':surname', $erasmus['surname'], PDO::PARAM_STR);
            $statement->bindParam(':nationality', $erasmus['nationality'], PDO::PARAM_STR);
            $statement->bindParam(':birthday', $erasmus['birthday'], PDO::PARAM_STR);
            $statement->bindParam(':city', $erasmus['city'], PDO::PARAM_STR);
            $statement->bindParam(':faculty', $erasmus['faculty'], PDO::PARAM_STR);
            $statement->bindParam(':mobile', $erasmus['mobile'], PDO::PARAM_STR);
            $statement->bindParam(':esncard', $erasmus['esncard'], PDO::PARAM_STR);
            $statement->bindParam(':uni_id', $erasmus['uni_id'], PDO::PARAM_STR);
            $statement->bindParam(':registration_date', $erasmus['registration_date'], PDO::PARAM_STR);
            $statement->execute();
        } finally {
            $conn=null;
        }
    }
}
