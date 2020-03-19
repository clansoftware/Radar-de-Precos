<?php
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
/**
 * Short description for file
 *
 * Long description for file (if any)...
 *
 * PHP version 7
 *
 * LICENSE: This source file is subject to version 3.01 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://www.php.net/license/3_01.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to license@php.net so we can mail you a copy immediately.
 *
 * @category   CategoryName
 * @package    PackageName
 * @author     CLAN SOFTWARE <Victor Luis dos Santos>
 * @copyright  2019-2020 The Clan
 * @license    http://www.php.net/license/3_01.txt  PHP License 3.01
 * @version    SVN: 0.3RTM
 * @link       http://api.pesquisatudo.com.br
 * @see        NetOther, Net_Sample::Net_Sample()
 * @since      File available since Release 1.2.0
*/
require('vendor/autoload.php');
use \Firebase\JWT\JWT;

class Core {

	public static $jwt = null;
	public static $token = null;
	public static $wsdl = 'http://api.pesquisatudo.com.br:5001/';
	
	/**
	 * @param $token [String]
	 * @param $jwt [String]
	 * @param $debug [bool]
	*/
	function __construct($token=null, $jwt=Null, $debug=False) {
		try {
			if ($debug) {
				ini_set('display_errors', 1);
				ini_set('display_startup_errors', 1);
				error_reporting(E_ALL);
			}
			if (is_null($token) || is_null($jwt)) {
				throw new Exception("Token e JWT são obrigatórios !", 1);
			} else {
				self::$jwt = $jwt;
				self::$token = $token;
			}
		} catch (Exception $e) {
			return '['.$e->getCode().']'.$e->getMessage();
		}
	}

	/**
	 * @see Responsável por executar uma requisição ao servidor PesquisaTudo
	 * @param [STRING] $jwtCode
	 * @param [Array] $sites: 'icetran', 'tecnodata', 'simead', 'itt', 'ibacbrasil'
	 * @author Santos L. Victor
	*/
	public function getPrices($dtInit=null, $dtEnd=null, $sites=array(), $ufs=array()) {
		try {
			$data = array();
			$data['token'] = self::$token;
			$data['jwt'] = self::$jwt;
			$data['retorno'] = 'Json';//retirar se for utilizar o formato PowerBI

//Json';
			$jwtCode = JWT::encode($data, self::$jwt);
			//     die(self::$wsdl.'radar?jwt='.$jwtCode);//pra gerar a url
			$response = array();
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, self::$wsdl.'radar?jwt='.$jwtCode );


			curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
			$response = curl_exec( $ch );
			if( curl_errno($ch) ){
				throw new Exception(curl_error($ch));
			}
		} catch (Exception $e) {
			$response['error'] = $e->getMessage();
		}
		return $response;
	}
}
$core = new Core('<seu token>', '<seu jwt>');


echo json_encode($core->getPrices());
?>