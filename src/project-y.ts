import { Bid } from "../generated/ProjectY/ProjectY";
import { BidEntity } from "../generated/schema";
import { ProjectY } from "../generated/ProjectY/ProjectY";

export function handleBid(event: Bid): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = BidEntity.load(event.transaction.from.toHex());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new BidEntity(event.transaction.from.toHex());
  }

  let contract = ProjectY.bind(event.address);
  let buyerInfo = contract.getBuyerInfo(event.params.bidId);
  let sellerInfo = contract.getSellerInfo(event.params.entryId);

  // Entity fields can be set based on event parameters
  entity.buyer = event.params.buyer;
  entity.entryId = event.params.entryId;
  entity.bidId = event.params.bidId;
  entity.contractAddress = sellerInfo.contractAddress;
  entity.tokenId = sellerInfo.tokenId;
  entity.isSelected = buyerInfo.isSelected;

  // Entities can be written to the store with `.save()`
  entity.save();

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.ONE_MONTH(...)
  // - contract.biddingPeriod(...)
  // - contract.getAllBidsOnNFT(...)
  // - contract.getBuyerInfo(...)
  // - contract.getDownPaymentAmount(...)
  // - contract.getHistoricTotalBidIds(...)
  // - contract.getHistoricTotalEntryIds(...)
  // - contract.getInstallmentAmountPerMonth(...)
  // - contract.getInstallmentMonthTimestamp(...)
  // - contract.getIsBidIdValid(...)
  // - contract.getIsEntryIdValid(...)
  // - contract.getNFTsOpenForSale(...)
  // - contract.getSellerInfo(...)
  // - contract.getTotalBidIds(...)
  // - contract.getTotalEntryIds(...)
  // - contract.getTotalInstallments(...)
  // - contract.getUserNFTsOngoingInstallmentPhase(...)
  // - contract.getUserNFTsOpenForSale(...)
  // - contract.gracePeriod(...)
  // - contract.onERC721Received(...)
  // - contract.owner(...)
  // - contract.sell(...)
  // - contract.withdrawSell(...)
}
