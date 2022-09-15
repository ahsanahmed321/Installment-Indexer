import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Bid,
  BidSelected,
  BidWithdrawn,
  BiddingPeriodUpdated,
  GracePeriodUpdated,
  InstallmentPaid,
  Liquidated,
  OwnerUpdated,
  PaymentWithdrawn,
  Sell,
  SellWithdrawn
} from "../generated/ProjectY/ProjectY"

export function createBidEvent(
  buyer: Address,
  entryId: BigInt,
  bidId: BigInt,
  timestamp: BigInt
): Bid {
  let bidEvent = changetype<Bid>(newMockEvent())

  bidEvent.parameters = new Array()

  bidEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  bidEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  bidEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  bidEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return bidEvent
}

export function createBidSelectedEvent(
  bidId: BigInt,
  entryId: BigInt
): BidSelected {
  let bidSelectedEvent = changetype<BidSelected>(newMockEvent())

  bidSelectedEvent.parameters = new Array()

  bidSelectedEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  bidSelectedEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )

  return bidSelectedEvent
}

export function createBidWithdrawnEvent(
  bidId: BigInt,
  entryId: BigInt,
  value: BigInt
): BidWithdrawn {
  let bidWithdrawnEvent = changetype<BidWithdrawn>(newMockEvent())

  bidWithdrawnEvent.parameters = new Array()

  bidWithdrawnEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  bidWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  bidWithdrawnEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return bidWithdrawnEvent
}

export function createBiddingPeriodUpdatedEvent(
  prevBiddingPeriod: BigInt,
  newBiddingPeriod: BigInt
): BiddingPeriodUpdated {
  let biddingPeriodUpdatedEvent = changetype<BiddingPeriodUpdated>(
    newMockEvent()
  )

  biddingPeriodUpdatedEvent.parameters = new Array()

  biddingPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevBiddingPeriod",
      ethereum.Value.fromUnsignedBigInt(prevBiddingPeriod)
    )
  )
  biddingPeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newBiddingPeriod",
      ethereum.Value.fromUnsignedBigInt(newBiddingPeriod)
    )
  )

  return biddingPeriodUpdatedEvent
}

export function createGracePeriodUpdatedEvent(
  prevGracePeriod: BigInt,
  newGracePeriod: BigInt
): GracePeriodUpdated {
  let gracePeriodUpdatedEvent = changetype<GracePeriodUpdated>(newMockEvent())

  gracePeriodUpdatedEvent.parameters = new Array()

  gracePeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "prevGracePeriod",
      ethereum.Value.fromUnsignedBigInt(prevGracePeriod)
    )
  )
  gracePeriodUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newGracePeriod",
      ethereum.Value.fromUnsignedBigInt(newGracePeriod)
    )
  )

  return gracePeriodUpdatedEvent
}

export function createInstallmentPaidEvent(
  buyer: Address,
  entryId: BigInt,
  bidId: BigInt,
  installmentNumber: BigInt
): InstallmentPaid {
  let installmentPaidEvent = changetype<InstallmentPaid>(newMockEvent())

  installmentPaidEvent.parameters = new Array()

  installmentPaidEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  installmentPaidEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  installmentPaidEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  installmentPaidEvent.parameters.push(
    new ethereum.EventParam(
      "installmentNumber",
      ethereum.Value.fromUnsignedBigInt(installmentNumber)
    )
  )

  return installmentPaidEvent
}

export function createLiquidatedEvent(
  entryId: BigInt,
  bidId: BigInt,
  installmentPaid: BigInt,
  value: BigInt
): Liquidated {
  let liquidatedEvent = changetype<Liquidated>(newMockEvent())

  liquidatedEvent.parameters = new Array()

  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam(
      "installmentPaid",
      ethereum.Value.fromUnsignedBigInt(installmentPaid)
    )
  )
  liquidatedEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return liquidatedEvent
}

export function createOwnerUpdatedEvent(
  user: Address,
  newOwner: Address
): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerUpdatedEvent
}

export function createPaymentWithdrawnEvent(
  bidId: BigInt,
  entryId: BigInt,
  value: BigInt,
  paymentsClaimed: BigInt
): PaymentWithdrawn {
  let paymentWithdrawnEvent = changetype<PaymentWithdrawn>(newMockEvent())

  paymentWithdrawnEvent.parameters = new Array()

  paymentWithdrawnEvent.parameters.push(
    new ethereum.EventParam("bidId", ethereum.Value.fromUnsignedBigInt(bidId))
  )
  paymentWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  paymentWithdrawnEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  paymentWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "paymentsClaimed",
      ethereum.Value.fromUnsignedBigInt(paymentsClaimed)
    )
  )

  return paymentWithdrawnEvent
}

export function createSellEvent(
  seller: Address,
  contractAddress: Address,
  tokenId: BigInt,
  entryId: BigInt,
  timestamp: BigInt
): Sell {
  let sellEvent = changetype<Sell>(newMockEvent())

  sellEvent.parameters = new Array()

  sellEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )
  sellEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return sellEvent
}

export function createSellWithdrawnEvent(
  seller: Address,
  entryId: BigInt
): SellWithdrawn {
  let sellWithdrawnEvent = changetype<SellWithdrawn>(newMockEvent())

  sellWithdrawnEvent.parameters = new Array()

  sellWithdrawnEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  sellWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "entryId",
      ethereum.Value.fromUnsignedBigInt(entryId)
    )
  )

  return sellWithdrawnEvent
}
