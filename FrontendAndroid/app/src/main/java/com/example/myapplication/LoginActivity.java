package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


public class LoginActivity extends AppCompatActivity {
    ProgressDialog dialog;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        final Button btnLogin = findViewById(R.id.btnLogin);
        final Button register = findViewById(R.id.register);
        final EditText email=findViewById(R.id.email);
        final  EditText password=findViewById(R.id.password);

//        final EditText username=findViewById(R.id.)

        //loading

        btnLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                dialog = new ProgressDialog(LoginActivity.this);
                dialog.setMessage("Loading....");
                dialog.show();




                // dialog.dismiss();

                if(validate(email.getText().toString(),password.getText().toString()))
                {
                    startActivity(new Intent(LoginActivity.this, HomeActivity.class));
                    finish();
                }
                else
                {
                    Toast.makeText(getApplicationContext(),"Invalid Credentials, Please try again",Toast.LENGTH_LONG).show();
                }

            }
        });

        register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(LoginActivity.this, Registration.class));
                finish();
            }
        });

    }
    public boolean validate(String email,String password){
        if(email.equals("test@ibm.com") && password.equals("test"))
            return true;
        return false;
    }



}
