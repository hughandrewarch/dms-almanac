create table person(
    id bigint(20) not null auto_increment,
	name varchar(256),
	description text,
	race varchar (32),

	primary key (id)
);

create table stat_block(
    id bigint(20) not null auto_increment,
	str tinyint not null,
	dex tinyint not null,
	con tinyint not null,
	int_ tinyint not null,
	wis tinyint not null,
	cha tinyint not null,

	primary key (id)
);

create table person_stat_block(
    id bigint(20) not null auto_increment,
    person_id bigint(20) not null,
    stat_block_id bigint(20) not null,

	primary key (id),
	foreign key (person_id) references person(id),
	foreign key (stat_block_id) references stat_block(id)
);

create table person_relation(
    id bigint(20) not null auto_increment,
    person_id bigint(20) not null,
    relation varchar (32) not null,
    relation_id bigint(20) not null,

	primary key (id),
	foreign key (person_id) references person(id)
);

create table settlement(
    id bigint(20) not null auto_increment,
	name varchar(256),
	population int,
	description text,
	type varchar (32),

	primary key (id)
);

create table place(
    id bigint(20) not null auto_increment,
	name varchar(256),
	description text,
	type varchar (32),

	primary key (id)
);

create table settlement_place(
    id bigint(20) not null auto_increment,
    settlement_id bigint(20) not null,
    place_id bigint(20) not null,

	primary key (id),
	foreign key (settlement_id) references settlement(id),
	foreign key (place_id) references place(id)
);
