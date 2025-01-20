return {
  -- Set Colourscheme
  { import = "plugins.ui.colourscheme" },

  -- Bufferline
  { import = "plugins.ui.bufferline" },

  -- Lualine
  { import = "plugins.ui.lualine" },

  -- Git commands.
  { "tpope/vim-fugitive", dependencies = "tpope/vim-rhubarb" },

  -- Tree Sitter
  { import = "plugins.treesitter" },
}
