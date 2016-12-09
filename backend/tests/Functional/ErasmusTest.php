<?php

namespace Tests\Functional;

class ErasmusTest extends BaseTestCase {

    public function testCreate() {
        $erasmus = array(
            'id' => NULL,
            'name' => 'A',
            'surname' => 'B',
            'email' => bin2hex(openssl_random_pseudo_bytes(10)),
            'birthday' => '0000-00-00',
            'nationality' => 'D',
            'mobile' => 'E',
            'esncard' => bin2hex(openssl_random_pseudo_bytes(10)),
            'faculty' => 'G',
            'uni_id' => bin2hex(openssl_random_pseudo_bytes(10)),
            'registration_date' => '0000-00-00',
            'city' => 'J'
        );

        //Test normal insert
        $response = $this->runApp('POST', '/api/erasmus', $erasmus);
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertGreaterThan(json_encode('0'), $response->getBody());
        $erasmus['id'] = json_decode($response->getBody());

        // Test anti duplication in case of UNIQUE
        $response = $this->runApp('POST', '/api/erasmus', $erasmus);
        $this->assertEquals(500, $response->getStatusCode());

        return $erasmus;
    }

    /**
    * @depends testCreate
    */
    public function testSelectOne($erasmus) {
        $response = $this->runApp('GET', '/api/erasmus/'.$erasmus['id']);
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals((object)$erasmus, json_decode($response->getBody()));
        return $erasmus;
    }

    /**
    * @depends testSelectOne
    */
    public function testUpdate($erasmus) {
        //Modify the erasmus
        $erasmus['name'] = 'TestName';

        //Test the transition
        $response = $this->runApp('PUT', '/api/erasmus', $erasmus);
        $this->assertEquals(200, $response->getStatusCode());

        //Check id the object is changed
        $response = $this->runApp('GET', '/api/erasmus/'.$erasmus['id']);
        $this->assertEquals((object)$erasmus, json_decode($response->getBody()));
        return $erasmus;
    }

    /**
    * @depends testUpdate
    */

    public function testDelete($erasmus) {
        //Test the transition
        $response = $this->runApp('DELETE', '/api/erasmus/'. $erasmus['id']);
        $this->assertEquals(200, $response->getStatusCode());

        // Check if the record is gone
        $response = $this->runApp('GET', '/api/erasmus/'.$erasmus['id']);
        $this->assertEquals(False, json_decode($response->getBody()));
    }
}
