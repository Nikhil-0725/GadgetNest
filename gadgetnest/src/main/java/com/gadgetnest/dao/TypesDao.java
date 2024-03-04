package com.gadgetnest.dao;

import com.gadgetnest.entities.Types;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypesDao extends JpaRepository<Types, Long> {
}
