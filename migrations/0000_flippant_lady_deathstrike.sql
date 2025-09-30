CREATE TABLE "resumes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"title" varchar(255),
	"description" varchar(255),
	"photo_url" text,
	"color_hex" text DEFAULT '#000000',
	"border_style" text DEFAULT 'squircle',
	"summary" varchar(255),
	"first_name" varchar(255),
	"last_name" varchar(255),
	"job_title" varchar(255),
	"city" varchar(255),
	"phone" varchar(255),
	"email" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
