package com.api.weave.api.base

interface BaseRepository<T> {
    fun find(id: Long): T
    fun findAll(): List<T>
}