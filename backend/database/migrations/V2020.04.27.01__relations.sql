create table relation_type(
    id bigint(20) not null auto_increment,
    name varchar (32) not null,

	primary key (id)
);

create table relation(
    left_id bigint(20) not null,
    right_id bigint(20) not null,
    relation_id bigint(20) not null,

	primary key (left_id, right_id, relation_id),
	foreign key (relation_id) references relation_type(id)
);