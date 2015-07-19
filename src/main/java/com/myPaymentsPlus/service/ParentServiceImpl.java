package com.myPaymentsPlus.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myPaymentsPlus.domain.Parent;
import com.myPaymentsPlus.repository.ParentRepository;

@Service
public class ParentServiceImpl implements ParentService {

	private final ParentRepository parentRepository;

	@Autowired
	public ParentServiceImpl(ParentRepository parentRepository) {
		this.parentRepository = parentRepository;

	}

	@Override
	public Parent save(Parent parent) {
		return parentRepository.save(parent);
	}

}
