return {
  -- 'morhetz/gruvbox',
  -- 'rebelot/kanagawa.nvim',
  'sainnhe/gruvbox-material',
  lazy = false,
  priority = 1000,
  config = function (plugin, opts)
    -- require('kanagawa').setup(opts)

    vim.cmd('colorscheme gruvbox-material')
  end,
}
