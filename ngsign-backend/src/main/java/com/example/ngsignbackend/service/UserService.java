package com.example.ngsignbackend.service;

import com.example.ngsignbackend.model.User;
import com.example.ngsignbackend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class UserService implements IUserService {
    private final UserRepository repository;

    UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return repository.findById(id);
    }

    @Override
    public User createUser(User user) {
        return repository.save(user);
    }
}
