alter table relation_type
add unique (name);

alter table relation change relation_id relation_type_id bigint(20) not null;