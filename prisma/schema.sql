CREATE TABLE "public"."User" (
    id SERIAL PRIMARY KEY NOT NULL,
    sub VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    "completedChallanges" INTEGER NOT NULL,
    "totalExperience" INTEGER NOT NULL,
    "currentExperience" INTEGER NOT NULL,
    level INTEGER NOT NULL
)