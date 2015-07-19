package com.myPaymentsPlus.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myPaymentsPlus.domain.Parent;

public interface ParentRepository extends JpaRepository<Parent, Long> {

}
