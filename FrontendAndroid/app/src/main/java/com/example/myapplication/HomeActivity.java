package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        final LinearLayout temple=findViewById(R.id.temple);
        final LinearLayout rest=findViewById(R.id.rest);
        final LinearLayout malls=findViewById(R.id.malls);
        final LinearLayout supermarket=findViewById(R.id.supermarket);





        temple.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HomeActivity.this, DisplayValuesTemple.class);
                intent.putExtra("id", "temple");
                startActivity(intent);            }
        });

        rest.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HomeActivity.this, DisplayValuesTemple.class);
                intent.putExtra("id", "rest");
                startActivity(intent);            }
        });

        malls.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HomeActivity.this, DisplayValuesTemple.class);
                intent.putExtra("id", "malls");
                startActivity(intent);
                finish();

            }


        });

        supermarket.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(HomeActivity.this, DisplayValuesTemple.class);
                intent.putExtra("id", "supermarket");
                startActivity(intent);            }
        });



    }
}