-- Convert tabs to spaces
vim.opt.expandtab = true

-- Tab character size
vim.opt.shiftwidth = 4
vim.opt.tabstop = 4
vim.opt.softtabstop = 4

-- Keep indent on new lines
vim.opt.smartindent = true

-- Disable line wrapping
vim.opt.wrap = false

-- Show line number on current line
vim.opt.number = true

-- Show relative line numbers for all other lines
vim.opt.relativenumber = true

-- Vim command autocompletion mode
vim.opt.wildmode = 'longest:full,full'

-- Update terminal title
vim.opt.title = true

-- Enable mouse controls
vim.opt.mouse = 'a'

-- Enable full terminal colours
vim.opt.termguicolors = true

-- Enable spell check
vim.opt.spell = true

-- Make search case insensitive, unless an uppercase character is present
vim.opt.ignorecase = true
vim.opt.smartcase = true

-- Set special characters for tabs and trailing whitespace
vim.opt.list = true
vim.opt.listchars = { tab = '▸ ', trail = '·' }

-- Remove empty line characters
vim.opt.fillchars:append({ eob = ' ' })

-- Open new splits below and on the right of current buffer
vim.opt.splitbelow = true
vim.opt.splitright = true

-- Keep set distance from end of screen while scrolling
vim.opt.scrolloff = 8
vim.opt.sidescrolloff = 8

-- Use system clipboard
vim.opt.clipboard = 'unnamedplus'

-- Enable confirmation instead of errors
vim.opt.confirm = true

-- Keep undo history
vim.opt.undofile = true

-- Store file backups
vim.opt.backup = true

-- Don't store file backups in current directory
vim.opt.backupdir:remove('.')

-- Always show sign column
vim.opt.signcolumn = 'yes:2'
