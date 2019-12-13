create table skill
(
    id   serial not null
        constraint skill_pkey
            primary key,
    name varchar(255)
);

alter table skill
    owner to postgres;

create table person
(
    id   serial not null
        constraint person_pkey
            primary key,
    name varchar(255)
);

alter table person
    owner to postgres;

create table developedskill
(
    id       serial not null
        constraint developedskill_pkey
            primary key,
    hours    integer,
    personid integer
        constraint developedskill_personid_fkey
            references person,
    skillid  integer
        constraint developedskill_skillid_fkey
            references skill,
    date     date
);

alter table developedskill
    owner to postgres;

