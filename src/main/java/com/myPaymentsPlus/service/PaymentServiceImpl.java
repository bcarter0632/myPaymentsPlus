package com.myPaymentsPlus.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myPaymentsPlus.domain.CreditCard;
import com.myPaymentsPlus.domain.Parent;
import com.myPaymentsPlus.repository.CreditCardRepository;
import com.myPaymentsPlus.repository.ParentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	private final ParentRepository parentRepository;
	private final CreditCardRepository cardRepository;

	@Autowired
	public PaymentServiceImpl(ParentRepository parentRepository,
			CreditCardRepository cardRepository) {
		this.parentRepository = parentRepository;
		this.cardRepository = cardRepository;
	}

	public CreditCard findById(Long cardId) {
		return cardRepository.findOne(cardId);
	}

	public List<CreditCard> findAllByParentId(Long parentId) {
		return cardRepository.findAllByParentId(parentId);
	}

	public CreditCard save(Long parentId, CreditCard card) {
		if (card.getId() == null) {
			Parent parent = parentRepository.findOne(parentId);
			card.setParent(parent);
		}
		return cardRepository.save(card);
	}

}
