package com.myPaymentsPlus.service;

import java.util.List;

import com.myPaymentsPlus.domain.CreditCard;

public interface PaymentService {

	CreditCard findById(Long id);

	List<CreditCard> findAllByParentId(Long parentId);

	CreditCard save(Long parentId, CreditCard student);

}
