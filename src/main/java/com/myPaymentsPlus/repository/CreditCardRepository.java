package com.myPaymentsPlus.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myPaymentsPlus.domain.CreditCard;

public interface CreditCardRepository extends JpaRepository<CreditCard, Long> {

	List<CreditCard> findAllByParentId(Long parentId);

}
