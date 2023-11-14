return {
  'ellisonleao/gruvbox.nvim',
  lazy = false,
  priority = 1000,
  config = function (plugin, opts)
    require('gruvbox').setup(opts)

    vim.cmd('colorscheme gruvbox')
  end,
}
