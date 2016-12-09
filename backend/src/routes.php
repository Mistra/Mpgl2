<?php

use \database\ErasmusDao;

//Select One
$app->get('/api/erasmus/{id}', function ($request, $response, $args) {
    $erasmusDao = new ErasmusDao($this->database);
    return $response->withJson($erasmusDao->selectOne($args['id']));
});

//Select All
$app->get('/api/erasmus', function ($request, $response, $args) {
    $erasmusDao = new ErasmusDao($this->database);
    return $response->withJson($erasmusDao->select());
});

//Insert
$app->post('/api/erasmus', function($request, $response, $args) {
    $erasmus = $request->getParsedBody();
    $erasmusDao = new ErasmusDao($this->database);
    try {
        $id = $erasmusDao->create($erasmus);
        return $response->withJson($id);
    } catch(Exception $e) {
        //$this->logger->info("database error");
        return $response->withStatus(500);
    }
});

//Update
$app->put('/api/erasmus', function($request, $response, $args) {
    $erasmus = $request->getParsedBody();
    $erasmusDao = new ErasmusDao($this->database);
    try {
        $erasmusDao->update($erasmus);
        return $response;
    } catch (Exception $e) {
        return $response->withStatus(500);
    }
});

//Delete
$app->delete('/api/erasmus/{id}', function($request, $response, $args) {
    $erasmusDao = new ErasmusDao($this->database);
    $erasmusDao->delete($args['id']);
    return $response;
});
