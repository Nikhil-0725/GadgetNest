package com.gadgetnest.dao;

import com.gadgetnest.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RolesDao extends JpaRepository<Roles, Long> {
}
