<?php

use App\Models\Mailable;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(Mailable::class, 'mailable_id');
            $table->string('description', 200);
            $table->string('view', 100);
            $table->string('type', 10);
            $table->string('name', 50);
            $table->string('skeleton', 50);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('templates');
    }
};
