<?php

use App\Models\Template;
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
        Schema::create('mailables', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(Template::class, 'template_id');
            $table->string('title', 1000);
            $table->string('slug', 1000);
            $table->string('namespace', 1000);
            $table->boolean('markdown')->default(false);
            $table->string('markdown_name', 1000);
            $table->boolean('force')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mailables');
    }
};
