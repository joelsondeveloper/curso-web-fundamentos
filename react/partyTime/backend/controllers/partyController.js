const partyModel = require("../models/Party");
const { getAll } = require("./serviceController");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);

  console.log(priceSum, budget);

  if (priceSum > budget) {
    return false;
  }

  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "O orçamento não é suficiente!" });
        return;
      }

      const response = await partyModel.create(party);

      res.status(201).json({ response, msg: "Festa criada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const parties = await partyModel.find();

      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await partyModel.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Festa não encontrada!" });
      }

      res.json(party);
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const party = await partyModel.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Festa não encontrada!" });
      }

      const deletedParty = await partyModel.findByIdAndDelete(id);

      res
        .status(200)
        .json({ deletedParty, msg: "Festa deletada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "O orçamento não é suficiente!" });
        return;
      }

      const updatedParty = await partyModel.findByIdAndUpdate(id, party);

      if (!updatedParty) {
        return res.status(404).json({ msg: "Festa não encontrada!" });
      }

      res
        .status(200)
        .json({ updatedParty, msg: "Festa atualizada com sucesso!" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = partyController;
