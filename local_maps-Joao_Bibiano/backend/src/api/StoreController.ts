import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Store } from "../entity/Store";

export async function getAllStores(_req:Request, res: Response) {
  const storeRepository = getRepository(Store);

  const allStores = await storeRepository.find();

  return res.status(200).json(allStores);
}

export async function getStoreById(req:Request, res: Response) {
  const { id } = req.params;
  const storeRepository = getRepository(Store);

  const store = await storeRepository.findOne(id);

  return res.status(200).json(store);
}

export async function createStore(req:Request, res: Response) {
  const storeRepository = getRepository(Store);

  const savedStore = await storeRepository.save(req.body);

  return res.status(201).json(savedStore);
}

export async function updateStore(req:Request, res: Response) {
  const { id } = req.params;
  const storeRepository = getRepository(Store);

  await storeRepository.update({id}, req.body);

  const updatedStore = await storeRepository.findOne(id)

  return res.status(201).json(updatedStore);
}

export async function deleteStore(req:Request, res: Response) {
  const { id } = req.params;
  const storeRepository = getRepository(Store);

  await storeRepository.delete(id);

  return res.status(200).json({message: "store excluída com sucesso"});
}