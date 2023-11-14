return {
  'nvimdev/dashboard-nvim',
  opts = {
    dependencies = {{'nvim-tree/nvim-web-devicons'}},
    event = 'VimEnter',
    theme = 'doom',
    config = {
      header = {
        '',
        '',
        ' ███╗   ██╗ ███████╗ ██████╗  ██╗   ██╗ ██╗ ███╗   ███╗',
        ' ████╗  ██║ ██╔════╝██╔═══██╗ ██║   ██║ ██║ ████╗ ████║',
        ' ██╔██╗ ██║ █████╗  ██║   ██║ ██║   ██║ ██║ ██╔████╔██║',
        ' ██║╚██╗██║ ██╔══╝  ██║   ██║ ╚██╗ ██╔╝ ██║ ██║╚██╔╝██║',
        ' ██║ ╚████║ ███████╗╚██████╔╝  ╚████╔╝  ██║ ██║ ╚═╝ ██║',
        ' ╚═╝  ╚═══╝ ╚══════╝ ╚═════╝    ╚═══╝   ╚═╝ ╚═╝     ╚═╝',
        '',
        '',
      },
      center = {
        { icon = '  ', desc = 'New file', action = 'enew' },
        { icon = '  ', desc = 'Find file               ', key = 'Space + f', action = 'Telescope find_files' },
        { icon = '  ', desc = 'Recent files            ', key = 'Space + h', action = 'Telescope oldfiles' },
        { icon = '  ', desc = 'Find Word               ', key = 'Space + g', action = 'Telescope live_grep' },
      },
      footer = { '' }
    },
    hide = {
      statusline = false,
      tabline = false,
      winbar = false,
    }
  },
}
