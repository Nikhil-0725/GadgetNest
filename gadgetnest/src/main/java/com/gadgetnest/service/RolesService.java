package com.gadgetnest.service;

import com.gadgetnest.dto.RolesDTO;
import com.gadgetnest.entities.Roles;

import javax.management.relation.Role;
import java.util.List;

public interface RolesService {

    List<Roles> displayAllRoles();

    String deleteRoles(Long rid);

    Roles addRoles(RolesDTO role);

    Roles updateRoles(Roles role);

}
