package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.Toast;

public class DisplayValuesTemple extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_display_values);

        final Button home=findViewById(R.id.home);

        home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(DisplayValuesTemple.this,HomeActivity.class));
                finish();
            }
        });
        String Value = getIntent().getStringExtra("id");
        final LinearLayout ganesh=findViewById(R.id.ganesh);
        final LinearLayout cannot=findViewById(R.id.cannot);




        ganesh.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(DisplayValuesTemple.this,PoiActivity.class));
                finish();
            }
        });


        cannot.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(),"We cannot proceed this request.",Toast.LENGTH_LONG).show();

            }
        });


    }
}