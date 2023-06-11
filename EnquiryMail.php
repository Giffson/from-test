<?php
ini_set('display_errors', 1);
require '../PHPMailer/src/PHPMailer.php'
require '../PHPMailer/src/SMTP.php';
require '../PHPMailer/src/Exception.php';

try 
{
            $name=$_POST['name'];
            $email=$_POST['email'];
            $mobile=$_POST['mobile'];
            $buyitems=$_POST['buyitems'];
            $sellitems=$_POST['sellitems'];
            $message=$_POST['message'];

            $msg = 'Name - ' . $name ."\n";
            $msg .= '<br/>Mobile - ' . $mobile ."\n";
            $msg .= '<br/>Email - ' . $email ."\n";
            $msg .= '<br/>Buy Items - ' . $buyitems ."\n";
            $msg .= '<br/>Sell Items - ' . $sellitems ."\n";
            $msg .= '<br/>Message from Client - ' . $message ."\n";


            #$mail = new PHPMailer(true); 
            $mail = new PHPMailer\PHPMailer\PHPMailer();

        	$mail->IsSMTP();                           
        	$mail->SMTPAuth   = false;                 
        	// $mail->Port       = 25;        
            $mail->Port       = 122;                 
        	$mail->Host       = "localhost"; 
        	// $mail->Username   = "enquiry@cleanscrapjunk.com";   
            $mail->Username   = "paulgiffson@gmail.com.com";   
        	$mail->Password   = "Gift@2k00";            
        
        	$mail->IsSendmail();  
        
        	$mail->From       = "enquiry@cleanscrapjunk.com";
        	$mail->FromName   = "Online Enquiy - Clean Scrap Junk";
        
        	// $mail->AddAddress("maanavbothra@cleanscrapjunk.com");
            $mail->AddAddress("diwolom770@rockdian.com");
            $mail->Subject  = "Products Enquiry from ".$name;
        	$mail->WordWrap   = 80; 
        
            $mail->MsgHTML($msg);
        	$mail->IsHTML(true); 
                 
             if(!$mail->Send())
            {
                echo json_encode(array("Code"=>'0',"Res"=>'failed'));
            }
            else
            {
                echo json_encode(array("Code"=>'1',"Res"=>'success'));
            } 
}
catch(Exception $e) {
echo json_encode(array("Code"=>'0',"Res"=>$e->getMessage()));
}

?>