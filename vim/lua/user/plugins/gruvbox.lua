return {
  {
    'sainnhe/gruvbox-material',
    lazy = false,
    priority = 1000,
  },
  {
    'ellisonleao/gruvbox.nvim',
    lazy = false,
    priority = 1000,
    config = function (plugin, opts)
      vim.cmd('colorscheme gruvbox')
    end,
  }
}
