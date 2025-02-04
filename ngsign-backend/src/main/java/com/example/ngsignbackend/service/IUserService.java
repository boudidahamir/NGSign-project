package com.example.ngsignbackend.service;

import com.example.ngsignbackend.model.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    List<User> getAllUsers();
    Optional<User> getUserById(Long id);
    User createUser(User user);
}