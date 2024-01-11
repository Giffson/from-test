try {
    var url =
        Uri.parse("http://192.168.1.108:3258/Service.svc/SQlConnectConfig");
    var response = await http.post(url,
        headers: {"Content-type": "application/json"},
        body: con.jsonEncode({
          "type": "read",
          "qry":
              "select name,email,passwrd from data where email='$ema' and passwrd='$pasw'"
        }));


        //get method
        myapidata({"type": "read", "qry": "select name,email,Gender from data"});

        
        void myapidata(a) async {
            // print(a);
        
            try {
              var url =
                  Uri.parse("http://192.168.1.108:3258/Service.svc/SQlConnectConfig");
        
              var response = await http.post(url,
                  headers: {"Content-type": "application/json"},
                  body: con.jsonEncode(a));
              setState(() {
                var postedVal = con.jsonDecode(response.body)["data"];
                myArr = postedVal;
                myArr2 = postedVal;
                FullArr = postedVal;
                // print(myArr2);
              });
              // print("addddddddddddddd$myArr");
              // print(postedVal);
            } catch (e) {
              print(e);
            }
          }