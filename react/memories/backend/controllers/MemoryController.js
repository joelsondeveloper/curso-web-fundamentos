const Memory = require("../models/Memory");

const fs = require("fs");

const removedOldImage = (memory) => {
    
    fs.unlink(`./public${memory.src}`, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Imagem removida com sucesso");
        }
    })
};

const createMemory = async (req, res) => {
  try {
    const { title, description } = req.body;

    const src = `/images/${req.file.filename}`;
    const memory = await Memory.create({
      title,
      src,
      description,
    });

    if (!title || !description) {
      return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    const newMemory = new Memory({
      title,
      src,
      description,
    });

    await newMemory.save();

    res.json({
      msg: "Memoria criada com sucesso",
      newMemory,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find();
    res.json(memories);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const getMemory = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria nao encontrada" });
    }

    res.json(memory);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const deleteMemory = async (req, res) => {
  try {
    const memory = await Memory.findByIdAndDelete(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria nao encontrada" });
    }

    removedOldImage(memory);

    res.json({ msg: "Memoria deletada com sucesso" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const updateMemory = async (req, res) => {
  try {

    const { title, description } = req.body;

    let src = null

    if (req.file) {
        src = `/images/${req.file.filename}`;
    }

    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria nao encontrada" });
    }

    if (src) {
        removedOldImage(memory);
    }

    const updateData = {
        title: title || memory.title,
        src: src || memory.src,
        description: description || memory.description
    }

    const updateMemory = await Memory.findByIdAndUpdate(req.params.id, updateData, { new: true });

    res.json({ msg: "Memoria atualizada com sucesso", updateMemory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria nao encontrada" });
    }

    memory.favorite = !memory.favorite;
    await memory.save();

    res.json({ msg: "Memoria atualizada com sucesso", memory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
};

const addComment = async (req, res) => {
  try {

    const { name, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({ msg: "Preencha todos os campos" });
    }

    const newComment = {
      name,
      text
    };

    const memory = await Memory.findById(req.params.id);

    if (!memory) {
      return res.status(404).json({ msg: "Memoria nao encontrada" });
    }

    memory.comments.push(newComment);
    await memory.save();

    res.json({ msg: "Memoria atualizada com sucesso", memory });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Erro no servidor");
  }
}

module.exports = {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment
};
